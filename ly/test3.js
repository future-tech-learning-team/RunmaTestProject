import React ,{Component,} from "react"
import SearchInnerList from "./SearchData"

const data = [
    {
        StItem: "Sporting Goods",
        StNames: [
            {
                StName: "Football",
                StPrice: "$49.88",
                isHot: false,
                show: true,
            },
            {
                StName: "baseball",
                StPrice: "$9.88",
                isHot: true,
                show: true,
            },
            {StName: "basketball",
                StPrice: "$29.88",
                isHot: false,
                show: true,
            },
        ],
        isShow: true,
    },
    {
        StItem: "Electronics",
        StNames: [
            {
                StName: "iPad Touch",
                StPrice: "$99.88",
                isHot: false,
                show: true,
            },
            {
                StName: "iPhone 5",
                StPrice: "$339.88",
                isHot: false,
                show: true,
            },
            {
                StName: "nexus 7",
                StPrice: "$129.88",
                isHot: true,
                show: true,
            },
        ],
        isShow: true,
    },
]

class SearchTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchDate: data,
        }
    }
    // input 抬起的事件
    handleFilter =(e) => {
        const searchName = e.target.value
        const {
            searchDate,
        } = this.state
        const that = this
        const newSearchDate = [...searchDate,]

        setTimeout(() => {
            newSearchDate.forEach((items) => {
                const names = items.StNames

                names.forEach((itemOne) => {
                    const itemData = itemOne

                    if (itemData.StName.toLowerCase().indexOf(searchName.toLowerCase()) > -1) {
                        itemData.show = true
                    } else {
                        itemData.show = false
                    }
                })
            })
            that.setState({
                searchDate: newSearchDate,
            })
        },200)
    };

    // 点击checkbox
    handleStock=(e) => {
        const {
            searchDate,
        } = this.state
        const status = e.target.checked
        // 没有分号会报错
        const newCateGory = [...searchDate,]

        newCateGory.forEach((item) => {
            const itemCate = item

            if (status) {
                itemCate.isShow = false
            } else {
                itemCate.isShow = true
            }
        })
        // this 还需要另外存储？
        const that = this

        that.setState({
            searchDate: newCateGory,
        })
    };

    renderData = () => {
        const {
            searchDate,
        } = this.state

        return searchDate.map((item,index) => {
            const {
                StItem,
                StNames,
                isShow,
            } = item
            // 问题： 直接用index 报错
            const indexCode = index

            return (
                <div className="item-row" key={indexCode}>
                    <h4 className={isShow ? 'show' : "hidden"}>{StItem}</h4>
                    <h6>
                        <SearchInnerList StNames={StNames} />
                    </h6>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="searchBox">
                <h1>搜索</h1>
                <div>
                    <input type="text" onChange={this.handleFilter}/>
                    <br/>
                    <input type="checkbox" onChange={this.handleStock}/> only show products in stock
                </div>
                <div>
                    { this.renderData()}
                </div>
            </div>
        )
    }
}
export default SearchTest

