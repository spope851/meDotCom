class WhatsNew extends React.Component {
    constructor () {
        super()
        this.state = { content: undefined } // {"id":1,"title":"big title","img":"https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/34/83/34-83-101P/Stay-Cool-Balazs-Solti-Poster.jpg","domain":"https://google.com","summary":"sick"} }
    }

    componentDidMount = async () => {
        const content = await fetch('api/getContent').then(res => res.json())
        this.setState({ content })
    }

    render () {
        const { content } = this.state
        return content
            ? (
                <div
                    id="link-preview"
                    style={{ display: 'flex', border: 'solid #aaa', borderRadius: '15px' }}
                    onClick={() => window.open(content.domain, '_blank').focus()}
                    onMouseOver={() => document.getElementById(`link-preview`).classList.add('tweet-hover')}
                    onMouseLeave={() => document.getElementById(`link-preview`).classList.remove('tweet-hover')}
                >
                    <img style={{ objectFit: 'cover', borderRadius: '15px 0 0 15px' }} src={content.img || './assets/favicon.ico'} alt="image" />
                    <div style={{ padding: '20px 5px 0 10px', textAlign: 'left' }}>
                        <p
                            style={{
                                margin: 0
                            }}>{content.title}</p>
                        <p
                            style={{
                                color: '#777',
                                margin: 0,
                                fontSize: '14px'
                            }}>{content.summary}</p>
                        <a
                            href={content.domain}
                            style={{
                                textDecoration: 'none',
                                color: '#aaa',
                                fontSize: '14px',
                                display: 'inline-block',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                maxWidth: 300
                            }}><img width="15px" src="./assets/images/link.svg" alt="link" />{content.domain.split('://')[1]}</a>
                    </div>
                </div>
            ) 
            : (
                <div
                    style={{ 
                        textAlign: 'center',
                        margin: 10,
                        padding: 10,
                        border: 'dotted #aaa',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '1 1 0%'
                    }}>
                    <span>loading preview...</span>
                </div>
            )
    }
}


// insert into content(title, img, domain, summary) values( 'jo bros', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-lrGaL8fvATsEFi6vuYxpcmLDXEJq0BSWw&usqp=CAU', 'http://jonas.com', 'ladies and gentlemen, the jonas brothers');