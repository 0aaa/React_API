const Error404 = (props) => {
    return (
        <>
            <p>Error 404</p>
            <button onClick={() => props.history.goBack()} className='btn btn-outline-danger'>Return</button>
        </>
    )
}

export default Error404