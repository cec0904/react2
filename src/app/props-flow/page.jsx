import ComponentA from '@/components/ComponentA'
import ComponentC from '@/components/ComponentC'

export default function PropsFlow() {
    const data = {id: 1, name: 'wook', message: 'Hello World!'}
    const data2 = 'hello!!'
    const data3 = {foo: 'hello'}
    return(
        <>
            <h1>Props Flow</h1>
            <ComponentA foo={data}/>
            <ComponentC foobar={data2}/>
        </>
    )
}