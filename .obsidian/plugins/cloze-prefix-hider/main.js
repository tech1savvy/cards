const obsidian = require('obsidian');

const STYLE_ID = 'cloze-prefix-hider-styles';

class ClozePrefixHiderPlugin extends obsidian.Plugin {
    async onload() {
        const styleEl = document.head.appendChild(document.createElement('style'));
        styleEl.id = STYLE_ID;
        styleEl.textContent = `
            mark.cloze-spoiler {
                cursor: pointer;
                border-radius: 2px;
                padding: 0 0.15em;
                transition: color 0.1s, background-color 0.1s;
                background-color: var(--text-highlight-bg);
                color: var(--text-highlight-bg) !important;
            }
            mark.cloze-spoiler.cloze-spoiler--revealed {
                color: inherit !important;
            }
        `;

        this.registerMarkdownPostProcessor((el) => {
            const process = (el) => {
                if (/^\d+;;/.test(el.textContent)) {
                    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
                    const firstTextNode = walker.nextNode();
                    if (firstTextNode) {
                        firstTextNode.textContent = firstTextNode.textContent.replace(/^\d+;;/, '');
                    }
                }
            };
            el.querySelectorAll('em').forEach(process);
            el.querySelectorAll('mark').forEach(mark => {
                process(mark);
                mark.classList.add('cloze-spoiler');
                mark.addEventListener('click', () => {
                    mark.classList.toggle('cloze-spoiler--revealed');
                });
            });
        });

        this.register(() => {
            document.getElementById(STYLE_ID)?.remove();
        });
    }
}

module.exports = ClozePrefixHiderPlugin;
