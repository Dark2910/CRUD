
import { renderTable } from "./presentation/render-table/render-table";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import usersStore from "./store/users-store";
import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderModal } from "./presentation/render-modal/render-modal";
import { saveUser } from "./use-cases/save-user";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {

/*     element.innerHTML = 'Loading...'; */
    await usersStore.loadNextPage();
    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async(userLike) => {
        const user = await saveUser( userLike );
        //console.log(user);
        usersStore.onUserChanged(user);
        renderTable();
    });
};