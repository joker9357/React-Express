import React, { Component } from 'react';
import SurveyForm from './SurveyForm'
import SurveyFromReview from './SurveyFormReciew'
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
    state = { showReview: false };

    renderContent() {
        if(this.state.showReview){
            return <SurveyFromReview
                onCancel={() => this.setState({showReview:false})}
            />
        }
        return <SurveyForm onSurveySubmit={() => this.setState({showReview:true})}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }

}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);