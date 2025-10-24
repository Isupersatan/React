export default function About(){

    return(
        <>
           <section className="container-fluid bg-body vh-100 text-white">
                <h1>About Us :</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, debitis animi possimus deleniti assumenda id minima ea, totam odit hic aliquid nulla officiis quae consectetur ex obcaecati sequi, necessitatibus maxime.
                    Fuga, tempore. Quisquam possimus quas iusto facere. Quod dolore error tenetur quibusdam aspernatur alias soluta facere, magni asperiores nihil ex nostrum nemo consectetur distinctio quasi esse atque architecto eligendi nam.</p>
                <div className="row">
                    <div className="col-5 m-auto">
                        <div className="card bg-nav text-center text-white">
                            <div className="card-header">
                                <h1>Developer details</h1>
                            </div>
                            <div className="card-body">
                                <table className="table table-dark table-bordered text-center">
                                    <tbody>
                                        <tr>
                                            <td>Developer</td>
                                            <td>Sayan Pal</td>
                                        </tr>
                                        <tr>
                                            <td>Domain</td>
                                            <td>Java FullStack with React</td>
                                        </tr>
                                        <tr>
                                            <td>Designation</td>
                                            <td>Trainee</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}