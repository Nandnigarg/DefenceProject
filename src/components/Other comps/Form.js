function Form() {
    return (
        <div className="container">
            <div style={{maxWidth:"600px"}} className="container-fluid mt-4">
                <form>
                    <h2 class="text text-danger">Fill Form (24 *7) Support</h2>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="name" placeholder="text" />
                        <label for="name">Enter Name</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="number" class="form-control" id="num" placeholder="number" />
                        <label for="num">Enter Mobile</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="course" placeholder="text" />
                        <label for="course">Enter Course</label>
                    </div>
                    <div class="form-floating mb-2">
                        <textarea class="form-control" placeholder="msg" id="msg" style={{ height: "100px" }}></textarea>
                        <label for="msg">Comments</label>
                    </div>
                    <button class="btn btn-dark mt-2 mb-5">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;