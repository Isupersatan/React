export default function Contact() {

    return (
        <>
            <section className="container-fluid bg-body vh-100 text-white">
                <h1>Contact Us :</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, debitis animi possimus deleniti assumenda id minima ea, totam odit hic aliquid nulla officiis quae consectetur ex obcaecati sequi, necessitatibus maxime.
                    Fuga, tempore. Quisquam possimus quas iusto facere. Quod dolore error tenetur quibusdam aspernatur alias soluta facere, magni asperiores nihil ex nostrum nemo consectetur distinctio quasi esse atque architecto eligendi nam.</p>
                <div className="row">
                    <div className="col-5 m-auto">
                        <div className="card bg-nav text-center text-white">
                            <div className="card-header">
                                <h1>Provide details</h1>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-2">
                                        <input type="text" className="form-control" placeholder="Enter Email" />
                                    </div>

                                    <div className="mb-2">
                                        <textarea type="text" className="form-control" placeholder="Enter your Message" />
                                    </div>
                                    <input type="submit" className="btn btn-dark" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}