const CheckBox = () => {
    return (
        <div>
            <label class="CheckBox">
                <input type="checkbox" />
                <span class="FakeInput"></span>
                {/* <span>Finished</span> */}
            </label>
            <div>Finished</div>
        </div>
    );
};

export default CheckBox;