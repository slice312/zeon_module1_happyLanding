import "./atoms/index.css";
import "./molecules/index.css";
import "./organisms/sections/index.css";
import {renderHeaderNavBar} from "./organisms/header-nav-bar";
import {renderAdCountdownTimer} from "./organisms/ad-countdown-timer";
import {renderAppPreview} from "./organisms/app-preview";
import {renderThemeDemoBlock} from "./organisms/theme-demo";
import {renderPricing} from "./organisms/pricing";
import {renderTestimonials} from "./organisms/testimonials";
import {renderDownload} from "./organisms/download";
import {ModalOrder} from "./templates/modal-order";


export const renderComponents = (config) => {
    renderHeaderNavBar(config.appStoreLink);
    renderAdCountdownTimer(config.timerEndDate);
    renderAppPreview();
    renderThemeDemoBlock();
    renderPricing(config.plans);
    renderTestimonials(config.testimonials);
    renderDownload(config.appStoreLink);

    ModalOrder.renderModal(config.plans);
};