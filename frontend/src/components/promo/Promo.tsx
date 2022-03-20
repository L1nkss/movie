import {FC} from "react";
import {PromoProps} from "./Promo.interface";

const Promo: FC<PromoProps> = ({className = ''}) => {
    return (
        <section className={`promo-film ${className}`}>
            <img
                className="promo-film__image"
                src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000017f737c53a4e8af34fa1176b8ac0e/1747x982"
                alt=""
            />
        </section>
    )
}
//
export default Promo;