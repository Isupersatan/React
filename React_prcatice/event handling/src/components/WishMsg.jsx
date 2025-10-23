export default function WishMsg(){
    function handleClick(){
        alert ("hello All");
    }

    function handleClick2(name){
        alert ("hello "+name);
    }

    return (
        <>
            <section className="container-fluid mt-3">
                <div className="row">
                    <div className="col-5 m-auto">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <h2>Event Handling</h2>
                            </div>
                            <div className="card-body">
                                <h4>Hello</h4>
                                <div className="btn btn-dark" onClick={handleClick}>Click</div>
                                <div className="btn btn-dark" onClick={()=> handleClick2('Sayan')}>Click</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}