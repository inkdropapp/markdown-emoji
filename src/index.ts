import type { Environment, IInkdropPlugin } from '@inkdropapp/types'
import remarkGemoji from 'remark-gemoji'

class MarkdownEmojiPlugin implements IInkdropPlugin {
  activate(app: Environment) {
    app.markdownRenderer.remarkPlugins.push(remarkGemoji)
  }

  deactivate(app: Environment) {
    if (app.markdownRenderer) {
      app.markdownRenderer.remarkPlugins = app.markdownRenderer.remarkPlugins.filter(
        plugin => plugin !== remarkGemoji
      )
    }
  }
}

export default new MarkdownEmojiPlugin()
