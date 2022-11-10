// Define a function named createDiv that takes no arguments.
// Return a <div> element.
function createDiv() {
  let div = document.createElement("div");
  return div;
}
createDiv();

// Define a function named createDivWithClass that takes one argument.
//   className (string)
//
// Return a <div> element with the given className.
function createDivWithClass(string) {
  let divWithClass = document.createElement("div");
  divWithClass.classList.add(string);
  return divWithClass;
}
createDivWithClass();

// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise

function updateTodoList(todoList) {
  const listItems = todoList.getElementsByTagName("li");
  for (let listItem of listItems) {
    if (listItem.innerText.startsWith("COMPLETED")) {
      listItem.remove();
    } else if (listItem.innerText.startsWith("URGENT")) {
      listItem.classList.add("important");
    }
  }
}
updateTodoList(todoList);

// Define a function named createList that takes one argument.
//   createList (object)
//
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
//
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'Galvanize': 'https://www.galvanize.com'
//    }
//
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.galvanize.com">Galvanize</a></li>
//    </ul>

function createList(data) {
  const ul = document.createElement("ul");

  for (let title in data) {
    const url = data[title];

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    i = ul.append(li);
    li.append(a);
  }
  return ul;
}

// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.

function extractQuote(article) {
  const p = article.children[0];
  const pText = p.innerText;
  const i = pText.indexOf('"');
  const j = pText.lastIndexOf('"');

  if (i > -1 && j > -1) {
    const quoteText = pText.slice(i, j + 1);

    const blockquote = document.createElement("blockquote");
    blockquote.textContent = quoteText;
    article.append(blockquote);

    p.remove();
  }
}

// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
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
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.
// console.log('df');
// function createTable(data) {
//   const table = document.createElement("table");
//   const tfoot = document.createElement("tfoot");
//   console.log('df');
//   // Handle thead
//   const thead = document.createElement("thead");
//   table.append(thead);

//   const tr = document.createElement("tr");
//   thead.append(tr);

//   for (let text of data[0]) {
//     const th = document.createElement("th");
//     th.textContent = data;
//     tr.append(th);
//   }
//   console.log('df');

//   // tbody
//  const tbody = document.createElement("tbody");
// table.append(tbody)

//   for (let textList of data.slice(1, data.length - 1)) {
//     const row = document.createElement("tr");
//     tbody.append(row);
//     for (let text of textList) {
//       const td = document.createElement("td");
//       td.textContent = text;
//       row.append(td);
//     }
//   }
//   console.log('df');

//   const footData = data.at[-1];
// }

function createTable(data){
  const table = document.createElement('TABLE');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const tbody =  document.createElement('tbody');
  const tfoot = document.createElement('tfoot');


  //Head ================================================
table.append(thead);

thead.append(tr)
for(let text of data[0]){
const th = document.createElement("th");
th.textContent = text;
tr.append(th);

}

table.append(tbody);

//body===========================================
for(let array of data.slice(1,data.length-1)){
const tr = document.createElement("tr");
tbody.append(tr);
for(let text of array){
const td = document.createElement("td");
td.textContent = text;
tr.append(td)
}
}

//foot==================================
table.append(tfoot);
const trfoot = document.createElement("tr");
for(let text of data[data.length-1]){
const td = document.createElement("td");
td.textContent = text;
trfoot.append(td);
tfoot.append(trfoot);

}
return table;
}

