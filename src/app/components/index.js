import "./atoms/index.css";
import "./organisms/sections/index.css";
import {registerAdCountdownTimer} from "./organisms/ad-countdown-timer";
import {registerThemeDemoBlock} from "./organisms/theme-demo";
import {ModalOrder} from "./organisms/modal-order";


export const registerControls = () => {
    registerAdCountdownTimer();
    registerThemeDemoBlock();




    const btn = document.getElementById("app-preview-btn-buy-now");
    const modalOrder = document.getElementById("modal-order");
    btn.onclick = () => {
        document.body.classList.add("modal-open");
        modalOrder.classList.add("modal-order_open");
    };

    const btnClose = document.getElementById("modal-order-close-btn");
    btnClose.onclick = () => {
        document.body.classList.remove("modal-open");
        modalOrder.classList.remove("modal-order_open");
    };

    const btn3 = document.getElementById("pricing-btn-plan3");
    const modal = new ModalOrder();
    modal.init();

    btn3.onclick = () => {
        modal.open(3);
    };

};