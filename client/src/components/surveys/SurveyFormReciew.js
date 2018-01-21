import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions'
import { withRouter } from 'react-router-dom';

const SurveyReview = ({onCancel, formValues, submitSurvey, history}) =>{
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
          <div key={name}>
              <label>{label}</label>
              <div>
                  {formValues[name]}
              </div>
          </div>
        );
    });
    return (
    <div>
        {reviewFields}
        <button className="yellow btn-flat white-text darken-2" onClick={onCancel}>back</button>
        <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues, history)}>
            send survey
            <i className="material-icons right">email</i>
        </button>
    </div>
    );
};

function mapStateToProps(state){
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps,actions)(withRouter(SurveyReview));