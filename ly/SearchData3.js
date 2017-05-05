import React ,{Component,} from "react"
// 组件：item 列表
class SearchInnerList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    renderList = () => {
        const item = this.props.StNames

        return item.map((item2,key) => {
            const {
                StName,
                StPrice,
                isHot,
                show,
            } = item2
            const keyCode = key

            return (
                <div className={show ? 'show' : 'hidden'} key={keyCode}>
                    <h6>
                        <span className={isHot ? "hot" : ''}>{StName}</span>
                        <span className="item-name">{StPrice}</span>
                    </h6>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

export default SearchInnerList

