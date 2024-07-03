import "./render-buttons.css";
import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";


/**
 * 
 * @param {HTMLDivElement} elemente 
 */
export const renderButtons = (elemente) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = `Next >>`;

    const previousButton = document.createElement('button');
    previousButton.innerText = `<< Previous`;

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    elemente.append(previousButton, currentPageLabel, nextButton);



    
    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable(elemente);
    });

    previousButton.addEventListener('click', async () => {
        await usersStore.loadPrevPage();
        currentPageLabel.innerText = usersStore.getCurrentPage(); 
        renderTable(elemente);

    });
    

};