import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Formik, Form, Field } from "formik";




const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");


    const comprar = (data) => {
        const order = {
            cliente: data,
            products: cart,
            total: totalPrice(),
        };

        const orderRef = collection(db, "orders");

        addDoc(orderRef, order).then((doc) => {
            setOrderId(doc.id);
            clearCart();
        });
    };

    if (orderId) {
        return (
            <>
                <h1 > Muchas gracias por tu compra </h1>
                <p > Numero de pedido es : {orderId} </p>
            </>
        );
    }
    const validateEmail = (value) => {
        let error;
        if (!value) {
            error = 'El correo electrónico es obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            error = 'Correo electrónico inválido';
        }
        return error;
    }








    return  (
        <div>
            <div>
                <h1> Checkout </h1>
            </div>
            <Formik
                initialValues={{ nombre: "", telefono: "", mail: '' }}
                onSubmit={(values) => comprar(values)}

            >
                <Form>
                    <label>
                        Nombre
                        <Field/>
                    </label>
                    <label >
                        Telefono
                        <Field className="InputCheck" type="text" name="telefono" />
                    </label>
                    <label className="LabelCheck">
                        Email
                        <Field className="InputCheck" type="email" name="mail" validate={validateEmail} />
                    </label>
                    <div>
                        <button type="submit" className="ButtonCheck">
                            Generar orden
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
      )
};

export default Checkout;