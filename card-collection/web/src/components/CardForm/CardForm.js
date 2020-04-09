import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  SelectField,
} from '@redwoodjs/web'
import { companies } from 'src/constants/companies'

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
    props.onSave(data, props?.card?.id)
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
          name="Player Name"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="name"
          defaultValue={props.card?.name}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="name" className={CSS.errorMessage} />

        <Label
          name="brand"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <SelectField
          name="brand"
          defaultValue={props.card?.brand}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        >
          {companies.map((company, idx) => {
            return (
              <option value={company} key={idx}>
                {company}
              </option>
            )
          })}
        </SelectField>
        <FieldError name="brand" className={CSS.errorMessage} />

        <Label
          name="year"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        {/*TODO: Create a dropdown with the years*/}
        <TextField
          name="year"
          defaultValue={props.card?.year}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="year" className={CSS.errorMessage} />

        <Label
          name="series"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="series"
          defaultValue={props.card?.series}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="series" className={CSS.errorMessage} />

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
          name="grade"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="grade"
          defaultValue={props.card?.grade}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="grade" className={CSS.errorMessage} />

        <Label
          name="image"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        {/*TODO: Implement the file upload and preview for images*/}
        <TextField
          name="image"
          defaultValue={props.card?.image}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="image" className={CSS.errorMessage} />

        <Label
          name="postedAt"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="postedAt"
          defaultValue={props.card?.postedAt}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="postedAt" className={CSS.errorMessage} />

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
