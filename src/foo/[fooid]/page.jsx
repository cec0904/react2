export default function fooId(props) {
    console.log(props);
    return(
        <h1>
            Foo {props.parans.fooId} / {props.searchParans.country}
        </h1>
    )
}