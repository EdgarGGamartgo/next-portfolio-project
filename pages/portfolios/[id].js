import BaseLayout from '../../components/layouts/BaseLayout'
import { withRouter } from 'next/router'

const Portfolio = (props) => {
    return (
        <BaseLayout>
            <h1>I am Portfolio page</h1>
            <h2>{props.router.query.id}</h2>
        </BaseLayout>
    )
}

export default withRouter(Portfolio)