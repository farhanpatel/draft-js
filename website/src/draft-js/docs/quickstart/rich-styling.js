/**
 * @generated
 */
var React = require("React");
var Layout = require("DocsLayout");
var content = `
Now that we have established the basics of the top-level API, we can go a step
further and examine how basic rich styling can be added to a \`Draft\` editor.

A [rich text example](https://github.com/facebook/draft-js/tree/master/examples/rich)
is also available to follow along.

## EditorState: Yours to Command

The previous article introduced the \`EditorState\` object as a snapshot of the
full state of the editor, as provided by the \`DraftEditor\` core via the
\`onChange\` prop.

However, since your top-level React component is responsible for maintaining the
state, you also have the freedom to apply changes to that \`EditorState\` object
in any way you see fit.

For inline and block style behavior, for example, the \`RichUtils\` module
provides a number of useful functions to help manipulate state.

Similarly, the [Modifier](/draft-js/docs/api/modifier.html) module also provides a
number of common operations that allow you to apply edits, including changes
to text, styles, and more. This module is a suite of edit functions that
compose simpler, smaller edit functions to return the desired \`EditorState\`
object.

For this example, we'll stick with \`RichUtils\` to demonstrate how to apply basic
rich styling within the top-level component.

## RichUtils and Key Commands

\`RichUtils\` has information about the core key commands available to web editors,
such as Cmd+B (bold), Cmd+I (italic), and so on.

We can observe and handle key commands via the \`handleKeyCommand\` prop, and
hook these into \`RichUtils\` to apply or remove the desired style.

\`\`\`
const MyEditor = React.createClass({
  onChange(editorState) {
    this.setState({editorState});
  },
  handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  },
  render() {
    const {editorState} = this.state;
    return (
      <DraftEditor
        editorState={editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
      />
    );
  }
});
\`\`\`

> handleKeyCommand
>
> The \`command\` argument supplied to \`handleKeyCommand\` is a string value, the
> name of the command to be executed. This is mapped from a DOM key event. See
> [Advanced Topics - Key Binding](docs/advanced/key-bindings.html) for more
> on this, as well as details on why the function returns a boolean.

## Styling Controls in UI

Within your React component, you can add buttons or other controls to allow
the user to modify styles within the editor. In the example above, we are using
known key commands, but we can add more complex UI to provide these rich
features.

Here's a super-basic example with a "Bold" button to toggle the \`BOLD\` style.

\`\`\`
const MyEditor = React.createClass({
  ...

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  }

  render() {
    const {editorState} = this.state;
    return (
      <div>
        <button onClick={this._onBoldClick}>Bold</button>
        <DraftEditor
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
});
\`\`\`
`
var Post = React.createClass({
  statics: {
    content: content
  },
  render: function() {
    return <Layout metadata={{"id":"quick-start-rich-styling","title":"Rich Styling","layout":"docs","category":"Quick Start","next":"quick-start-decorated-text","permalink":"docs/quickstart/rich-styling.html"}}>{content}</Layout>;
  }
});
module.exports = Post;
