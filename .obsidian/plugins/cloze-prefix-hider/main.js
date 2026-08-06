const obsidian = require('obsidian');

class ClozePrefixHiderPlugin extends obsidian.Plugin {
    async onload() {
        this.registerMarkdownPostProcessor((el) => {
            el.querySelectorAll('em').forEach(em => {
                if (/^\d+;;/.test(em.textContent)) {
                    const walker = document.createTreeWalker(em, NodeFilter.SHOW_TEXT);
                    const firstTextNode = walker.nextNode();
                    if (firstTextNode) {
                        firstTextNode.textContent = firstTextNode.textContent.replace(/^\d+;;/, '');
                    }
                }
            });
        });
    }
}

module.exports = ClozePrefixHiderPlugin;
