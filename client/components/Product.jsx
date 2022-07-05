import Image from "next/image"

const styles = {
    wrapper: "bg-[black] text-white text-center py-3 px-5 w-[200px] rounded",
    h2: " text-2xl font-bold mb-2",
    button: "bg-[greenyellow] text-[black] mt-4 px-4 py-2 rounded"
}

function Product(props) {

    const rev = ["⭐", "⭐", "⭐", "⭐", "⭐"];

    return (
        <div className={styles.wrapper}>
            <Image src={props.img} alt={props.title} width="200px" height="200px" />
            <div>
                <h2 className={styles.h2}>{props.title} </h2>
                <div>{rev.map((val, idx) => {
                    return idx < props.review && (<span>{val}</span>);
                })}</div>
                <p>{props.price} $</p>
                <div><button className={styles.button}>Buy</button></div>
            </div>

        </div>
    )
}

export default Product