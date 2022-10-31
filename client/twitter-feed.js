class TwitterFeed extends React.Component {
    constructor () {
        super()
        this.state = { tweets: [] }
    }

    componentDidMount = async () => {
        const tweets = await fetch('api/getTweets').then(res => res.json())
        console.log(tweets);
        this.setState({ tweets })
    }

    render () {
        const { tweets } = this.state
        return tweets.length 
            ? tweets.map(tweet => <div key={tweet} style={{ margin: "25px" }}>{JSON.stringify(tweet)}</div>) 
            : (
                <span>Loading tweets...</span>
            )
    }
}