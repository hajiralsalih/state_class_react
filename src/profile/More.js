import React from 'react'

 class More extends React.Component {
    state = {
        Person: {
          profession : "شارك أحمد حلمي في أكثر من 25 فيلما، وعدة مسلسلات، ومسرحية واحدة. وحصل علي عدة جوائز من أبرزها من مهرجان القاهرة السينمائي الدولي. وقام بتقديم عدة برامج منها: لعب عيال (1998)، ودربكة (1998)، ومن سيربح البونبون (2004)، وشوية عيال (2011)، وحلمي أون لاين. كما شارك كعضو لجنة تحكيم في برنامج أرابز غوت تالنت المواسم: 3 و4 و5 و6. وهو مؤسس شركة شادوز للإنتاج الفني والتوزيع. وقام بتأليف كتاب 28 حرف."
        },
        cont : 0,
      };
      
componentDidMount = () => {
    this.ace =setInterval(()=>{
        this.setState({
            cont:this.state.cont +1,
        });
    },1000);
};

componentWillUnmount () {
    clearInterval(this.ace);
};

  render() {
    const {profession }= this.state.Person;
    const{cont} = this.state;
    
    return (
      <div>
         <h4> {profession} <p> COUNTER:  {cont} </p> </h4>
      </div>
    )
  }
}
 
export default More
