import React from 'react';
import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';
import {httpService} from "../http-service";
import {useHistory} from "react-router-dom";

const UpdateForm = (props) => {
    const history = useHistory();

    const {register, control, handleSubmit, reset, formState, getFieldState} = useForm({
        defaultValues: async () => {
            return await httpService.get('posts/55').then(r => r.data);
        },
        mode: 'onChange',
    });

    const {
        isSubmitSuccessful,
        isSubmitting,
        isSubmitted,
        errors,
        dirtyFields,
        touchedFields,
    } = formState;

    const submit = (data) => {
        httpService.put('posts/55', data)
            .then(r => {
                alert('Updated');
                history.push('/');
            })
            .catch(e => alert(`Error: ${e.message}`));
    };

    const submissionError = (errors) => {
        console.log('submission errors', errors);
    };

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful]);

    return (
        <>
            <h3>Post Update Form</h3>
            <hr/>
            <form noValidate onSubmit={handleSubmit(submit, submissionError)}>
                <div className='from-group mb-3'>
                    <label htmlFor='userId' className='form-label'>
                        User Id
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='userId'
                        {...register('userId', {
                            required: 'User Id is required',
                            validate: {
                                numbersOnly: (fv) => {
                                    const regex = /^[1-9][0-9]?$|^100$/;
                                    return regex.test(fv) || 'User Id should be numbers (1-100)';
                                },
                            },
                        })}
                    />
                    <p className='text-danger form-text'>{getFieldState('userId').isDirty && errors.userId?.message}</p>
                </div>

                <div className='from-group mb-3'>
                    <label htmlFor='postId' className='form-label'>
                        Post Id
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='postId'
                        {...register('id', {
                            required: 'Post Id is required',
                            validate: {
                                numbersOnly: (fv) => {
                                    const regex = /^[1-9][0-9]?$|^100$/;
                                    return regex.test(fv) || 'Post Id should be numbers (1-100)';
                                },
                            },
                        })}
                    />
                    <p className='text-danger form-text'>{getFieldState('id').isDirty && errors.id?.message}</p>
                </div>

                <div className='from-group mb-3'>
                    <label htmlFor='title' className='form-label'>
                        Title
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        {...register('title', {
                            required: 'Title is required',
                            validate: {
                                // lettersOnly: (fv) => {
                                //     const regex = /^[A-Za-z ]*$/;
                                //     return regex.test(fv) || 'Title should only be letters';
                                // },
                                myAsyncValidator: async (fv) => {
                                    const postObject = await httpService('posts/55').then(r => r.data);
                                    return fv === postObject.title || 'This title is not acceptable'
                                }
                            },
                        })}
                    />
                    <p className='text-danger form-text'>{getFieldState('title').isDirty && errors.title?.message}</p>
                </div>

                <div className='form-group mb-3'>
                    <label htmlFor='body' className='form-label'>
                        Body
                    </label>
                    <textarea
                        className='form-control'
                        id='body'
                        rows='3'
                        {...register('body', {
                            maxLength: 200,
                            minLength: 5,
                            validate: {
                                lettersOnly: (fv) => {
                                    const regex = /^[A-Za-z \n]*$/;
                                    return regex.test(fv) || 'Post body should only be letters';
                                },
                            }
                        })}
                    ></textarea>
                    <p className='text-danger form-text'>{getFieldState('body').isDirty && errors.body?.message}</p>
                </div>

                <button className='btn btn-primary btn-sm'>Submit</button>
            </form>
            <DevTool control={control}/>
        </>
    );
};

export default UpdateForm;