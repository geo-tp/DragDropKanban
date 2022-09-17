import { data } from "./data";

export const addCard = (id, title, content, author) => {
  let card = {
    header: title,
    body: content,
    footer: `Le ${Date.now()} de ${author}`,
  };

  console.log(card);
  tables[id].cards.push(card);
};

export const moveCard = (cardId, tableId) => {
  let founded = false;
  let card = {};
  for (let i = 0; i < tables.length; i++) {
    if (founded) {
      break;
    }

    for (let j = 0; j < tables[i].cards.length; i++) {
      if (tables[i].cards[j].id === cardId) {
        card = tables[i].cards[j];
        tables[i].cards.splice(j, 1);
        founded = true;
        break;
      }
    }
  }

  const dropTable = tables.find((x) => x.id === tableId);

  if (dropTable) {
    dropTable.cards.push(card);
  }
  console.log(tables.find((x) => x.id === tableId));
};
