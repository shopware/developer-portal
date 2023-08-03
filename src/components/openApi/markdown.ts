import MarkdownIt from "markdown-it";
import hljs from 'highlight.js';
import * as shiki from "shiki";

export const render = async (value) => {
    if (!value) {
        return '';
    }

    const shikiRenderer = await shiki.getHighlighter({theme: 'nord', langs: ['js', 'json', 'php']});

    const MarkdownRenderer = MarkdownIt({
        highlight: function (str, lang) {

            // use shiki renderer
            return shikiRenderer.codeToHtml(str, {lang});

            return '';
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) {}
            }

            return ''; // use external default escaping
        }
    });

    return MarkdownRenderer.render(value);
};