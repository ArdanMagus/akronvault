//<script src="../vault/js/sort.js" defer></script>
function sortTable(id, column) {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("data-table" + id);
  switching = true;
  switched = false;
  revert = false;

  while (switching) {
    switching = false;
    rows = table.rows;
    continu = 0;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[column]; // NOTE / CONTRAINTE : trie brutalement le texte, inclus <li> <h>
      y = rows[i + 1].getElementsByTagName("td")[column];

      if (revert)
      {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      else{
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }

    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switched = true;
    }
    if (!switched) // si pas switché, la liste est alphabétique
    {
      switching = true;
      revert = true; // si déja alphabétique, alors inverser la ligne
    }
  }
}
