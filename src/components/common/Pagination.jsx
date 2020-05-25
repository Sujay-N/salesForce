import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPg } from '../../redux/actions'

export class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const { perPage, currentPage, staffData, setCurrentPg } = this.props
        let length = staffData.length
        let totalPages = length / perPage
        const pageList = []

        for (let i = currentPage-1 ; i>=0 && i<=currentPage+3 && i <= totalPages + 1; i++) {

            if(i===currentPage-1){
                if(i!==0)
                    pageList.push(<button className="page-item btn btn-sm btn-dark mr-1" key={i} onClick={()=>setCurrentPg(currentPage-1)}>Previous</button>)
                continue;
                }
                if(i===currentPage+3){
                pageList.push(<button className="page-item btn tbn-sm btn-dark ml-1"  key={i} onClick={()=>setCurrentPg(currentPage+1)}>Next</button>)
                continue;
                }

            pageList.push(<button  key={i} onClick={() => setCurrentPg(i)} type="button" className={`ml-1  btn ${currentPage === i ? 'btn-info' : 'btn-dark'}`}>{i}</button>)
        }
        console.log(pageList)
        return (
            

                

                <div className="offset-4">
                <nav aria-label="Page navigation example">
                <ul className="pagination">
                {totalPages !== 0 && pageList}
                </ul>
              </nav>
               

            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    perPage: state.perPage,
    currentPage: state.currentPage,
    totalPages : state.totalPages,
    staffData: state.staffData
})

const mapDispatchToProps = dispatch => ({
    setCurrentPg: (payload) => dispatch(setCurrentPg(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)