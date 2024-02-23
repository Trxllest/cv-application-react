function Info() {
    return (
        <form>
            <label htmlFor="">Name:{' '}</label>
            <input type="text" />
            <label htmlFor="">Email:{' '}</label>
            <input type="email" />
            <label htmlFor="">Phone Number:{' '}</label>
            <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
        </form>
    );
}

export default Info