import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  SelectField,
} from '@redwoodjs/web'

import { manufacturers } from 'src/constants/manufacturers'
import { sports } from 'src/constants/sports'
import { yearsByArray } from 'src/utils/yearsByArray'

const years = yearsByArray()

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const CardForm = (props) => {
  const onSubmit = (data) => {
    const year = { year: parseInt(data.year) }
    const autographed = {
      autographed: data.autographed === 'true' ? true : false,
    }
    const payload = Object.assign({}, data, year, autographed)
    props.onSave(payload, props?.card?.id)
  }

  return (
    <div className="text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mb-4"
          titleClassName="font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="player"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="player"
          defaultValue={props.card?.player}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="player" className={CSS.errorMessage} />

        <Label
          name="year"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <SelectField
          name="year"
          defaultValue={props.card?.year}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        >
          {years.map((year, idx) => {
            return (
              <option value={year} key={idx}>
                {year}
              </option>
            )
          })}
        </SelectField>
        <FieldError name="year" className={CSS.errorMessage} />

        <Label
          name="manufacturer"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <SelectField
          name="manufacturer"
          defaultValue={props.card?.manufacturer}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        >
          {manufacturers.map((company, idx) => {
            return (
              <option value={company} key={idx}>
                {company}
              </option>
            )
          })}
        </SelectField>
        <FieldError name="manufacturer" className={CSS.errorMessage} />

        <Label
          name="set"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="set"
          defaultValue={props.card?.set}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="set" className={CSS.errorMessage} />

        <Label
          name="number"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="number"
          defaultValue={props.card?.number}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="number" className={CSS.errorMessage} />

        <Label
          name="sport"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <SelectField
          name="sport"
          defaultValue={props.card?.sport}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        >
          {sports.map((sport, idx) => {
            return (
              <option value={sport} key={idx}>
                {sport}
              </option>
            )
          })}
        </SelectField>
        <FieldError name="sport" className={CSS.errorMessage} />

        <Label
          name="autographed"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <SelectField
          name="autographed"
          defaultValue={props.card?.autographed}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </SelectField>
        <FieldError name="autographed" className={CSS.errorMessage} />

        <Label
          name="image"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="image"
          defaultValue={props.card?.image}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: false }}
        />
        <FieldError name="image" className={CSS.errorMessage} />

        {/*<Label*/}
        {/*  name="postedAt"*/}
        {/*  className={CSS.label}*/}
        {/*  errorClassName={CSS.labelError}*/}
        {/*/>*/}
        {/*<TextField*/}
        {/*  name="postedAt"*/}
        {/*  defaultValue={props.card?.postedAt}*/}
        {/*  className={CSS.input}*/}
        {/*  errorClassName={CSS.inputError}*/}
        {/*  validation={{ required: false }}*/}
        {/*/>*/}
        {/*<FieldError name="postedAt" className={CSS.errorMessage} />*/}

        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CardForm
