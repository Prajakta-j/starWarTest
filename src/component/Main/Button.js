import React from 'react';
import './Button.css';
import logo from './images/logo.png';
import config from '../config/config';



export default class Header extends React.Component {

  constructor(props) {
  		super(props);
  		this.state = {
  			opened: false,
        opening_crawl:'',
        people:'',
        species:[],
  		};
  		this.toggleBox = this.toggleBox.bind(this);
  	}

  componentDidMount() {

    fetch(config.Url+'films/')
      .then(res => res.json())
      .then(
        (result) => {

      var longest='';
      var result1 = result.results;
      var opening_crawl = '';


      for (let i = 1; i < result1.length; i++) {
          if (result1[i]['opening_crawl'].length > longest.length) {
              longest = result1[i]['opening_crawl'];

              opening_crawl = result1[i];
          }
      }
      this.setState({opening_crawl:opening_crawl['title']});


        },

        (error) => {
          this.setState({
            isLoaded: true,
            // error
          });
        }
      )

      // people

      fetch(config.Url+'people/')
        .then(res => res.json())
        .then(
          (result) => {

        var longest='';
        var result1 = result.results;
        var people = '';


        for (let i = 1; i < result1.length; i++) {

            if (result1[i]['films'].length > longest.length) {
                longest = result1[i]['films'];
                people = result1[i];
            }
        }

        this.setState({people:people['name']});


          },

          (error) => {
            this.setState({
              isLoaded: true,
              // error
            });
          }
        )



        // people
        fetch(config.Url+'species/')
          .then(res => res.json())
          .then(
            (result) => {

          var longest='';
          var result1 = result.results;
          var species = '';

          var speciesArray = [];
          var speciesIndex = [];

          for (let i = 1; i < result1.length; i++) {


                  longest = result1[i]['films'];
                  speciesArray.push({'lengthA':longest.length,'name':result1[i].name});
                  // speciesIndex.push(result1[i]);
                  // species = result1[i];

          }


          speciesArray.sort(function(a,b) {
              return b.lengthA - a.lengthA;
            });

            console.log(speciesArray.slice(0, 3));

          this.setState({species:speciesArray.slice(0, 3)});


            },

            (error) => {
              this.setState({
                isLoaded: true,
                // error
              });
            }
          )




 }

  toggleBox() {



  		const { opened } = this.state;
  		this.setState({
  			opened: !opened,
  		});
  	}


  render() {


    const lapsList = this.state.species.map((data) => {
        return (
          <p className="ans" key={data.name}>{data.name + ' ('+ data.lengthA + ') ' }</p>
        )
      });





    		const { opened } = this.state;

    return (
    <div className="container main">
          <div className="container center">
                <img src={logo} className="img-responsive"/>
                <button className="buttonName"  onClick={this.toggleBox}>Do. Or do not. There is no try </button>

                {opened && (
        					<div className="boxContent">
        					     <p>Which of all StarWars movies has the longest opening crawl?</p>
                       <p className="ans">{this.state.opening_crawl}</p>

                       <p>What character (person) appeared in the most of StarWars films?</p>
                       <p className="ans">{this.state.people}</p>

                       <p>What species appeared in the most number of StarWars films?</p>

                        {lapsList}
        					</div>
				        )}

          </div>

    </div>

    );
  }

}
