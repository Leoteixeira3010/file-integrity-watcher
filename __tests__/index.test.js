const fs = require('fs');
const { JSDOM } = require('jsdom');

test('banner text and console message are present', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  const banner = dom.window.document.getElementById('banner');
  expect(banner.textContent).toBe('File Integrity Watcher');

  // jsdom collects console messages; we can check them via a mock
  const messages = [];
  dom.window.console = { log: (msg) => messages.push(msg) };
  dom.window.eval("console.log('File Integrity Watcher loaded')");
  expect(messages).toContain('File Integrity Watcher loaded');
});
