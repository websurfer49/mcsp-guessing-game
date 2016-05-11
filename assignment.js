// Define a function named updateToDoList. It takes one argument:
//   todoList (<ul> DOM element)
//
// The function will iterate over the list items (<li>) in the list and will
// do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     Tip: Applying a CSS class means adding on top of what's there.
//   * Make no change otherwise.




// Define a function named createLinks. It takes one argument:
//   links (object)
//
// The object has the following structure:
// {
//   "<LINK TEXT>": "<LINK URL>",
//   "<LINK TEXT>": "<LINK URL>",
//   "<LINK TEXT>": "<LINK URL>",
//   ...
// }
// where <LINK TEXT> will be the label for the link and <LINK URL> will be where
// url that the link points to.
//
// The function will return an unordered list DOM element of links with the
// given label and url. For example, Given:
// {
//   "Google": "https://www.google.com",
//   "Facebook": "https://www.facebook.com",
//   "Yahoo": "https://www.yahoo.com",
//   "Galvanize": "https://www.galvanize.com"
// }, it will produce the following:
// <ul>
//   <li><a href="https://www.google.com">Google</a></li>
//   <li><a href="https://www.facebook.com">Facebook</a></li>
//   <li><a href="https://www.yahoo.com">Yahoo</a></li>
//   <li><a href="https://www.galvanize.com">Galvanize</a></li>
// </ul>




// Write a function pullQuote which takes in one argument.
//   article (<article> DOM element)
//
// We assume the article will contain a paragraph. Here's an example:
//
// <article>
//   <p>Neale Donald Walsch once said, "Life begins at the end of your comfort zone." This is really important.</p>
// </article>
//
// The function will check the paragraph for double quotes (") and pull it out
// into a blockquote. It will then replace the paragraph with that blockquote.
// No changes are made if there are no double quotes. For example, given the
// above input, it will produce the following:
//
// <article>
//   <blockquote>"Life begins at the end of your comfort zone."</blockquote>
// </article>
//
// Tip: Assume that if there is a double quote, there will be a closing double
// quote in the text.




// Define a function named createTable. It takes one argument:
//   data (array of arrays) (We can assume that data has at least 3 elements)
//
// The function will return a table DOM element that matches the structure of
// the input data. The first row will be the header, and the last row will be
// the footer. For example, given the following input:
// [
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i'],
//   ['j', 'k', 'l']
// ]
// the function would produce
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
