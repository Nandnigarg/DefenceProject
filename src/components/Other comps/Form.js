function Form() {
    return (
        <div className="container">
            <div style={{ maxWidth: "700px", textAlign: "center" }} className="container-fluid mt-4">
                <form>
                    <h2 class="text text-danger">Registration Form</h2>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="name" placeholder="text" />
                        <label for="name">Enter Student Name</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="number" class="form-control" id="num" placeholder="number" />
                        <label for="num">Enter Mobile/WhatsApp Number</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="email" class="form-control" id="mail" placeholder="text" />
                        <label for="mail">Enter Email Id</label>
                    </div>

                    <select class="form-select form-control form-select-lg" aria-label="mode">
                        <option hidden selected>Select Test Mode</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>

                    <button class="btn btn-dark mt-2 mb-5">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;