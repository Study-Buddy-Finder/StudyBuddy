import React from 'react';
import { configure, shallow } from 'enzyme';
// import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
// import CreateSchool from '../client/components/CreateSchool';
// import EventLanding from '../client/components/EventLanding';
import Classinfo from '../client/components/Classinfo';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Classinfo check', () => {
    let wrapper;
    const props = {
      name: 'COMP101',
      subject: 'Javascript Fundamentals',
    };
    beforeAll(() => {
      wrapper = shallow(<Classinfo {...props} />);
    });

    it('Renders a <p> tag with the label in bold', () => {
      expect(wrapper.type()).toEqual('div');
      // expect(wrapper.text()).toEqual('Mega: Markets');
      // expect(wrapper.find('strong').text()).toMatch('Mega');
    });
  });



  })
  
  // describe('CreateSchool', () => {
  //   // let wrapper;
  //   // beforeAll(() => {
  //   //   wrapper = mount(<CreateSchool { ...props}/>)
  //   // })
    
  //   it('should submit event when submit is clicked', () => {
  //     const callback = sinon.spy();
  //     const wrapper = mount((
  //       <div className="schoolForm">
  //         <form onSubmit={handleSubmit(onSubmit)}>
  //           <label>Name</label>
  //           <input name="school_name" placeholder="School Name" ref={register} />

  //           <label>Location</label>
  //           <input name="school_location" placeholder="School Location" ref={register} />

  //           <input type="submit"></input>
  //         </form>
  //       </div>
  //     ),
  //     wrapper.find('[type="submit"]').get(0).click()
  //     expect(callback).to.have.been.called();
  //     )
  //   })
  //   // const props = {
  //   //   school_name: "Penn State",
  //   //   school_location: "State College"
  //   // };
    
    

  // })
// })

/*
// POSSIBLE ENZYME REACT TEST
// Check if the shallow render matches

test("should render correctly", () => {
    const wrapper = shallow(<CountDown startTime={30} />).toJSON();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  */