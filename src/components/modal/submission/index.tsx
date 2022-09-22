import React, { Dispatch, SetStateAction, useState } from "react";
import { supabaseMethods } from "../../../database/supabase";
import { FormItemWrapper } from "../multiStepModal/FormItemWrapper";
import { Box, Select, TextInput } from "grommet";
import { ModalWrapper } from "../multiStepModal";
import {
  Countries,
  FormStep,
  GeoOption,
  Provinces,
  States,
} from "../../../types";
import {
  SubmissionFormState,
  SubmissionFormStateType,
  useSubmissionFormState,
} from "./useSubmissionFormState";
import { convertEnumToObject } from "../../../types/geo";

export const Submission = (props: { closeModal: () => void }) => {
  const [formStep, setFormStep] = useState(FormStep.Filling);

  const {
    values,
    setValues: setValue,
    formHelpers,
    flags,
  } = useSubmissionFormState();

  return (
    <ModalWrapper
      formStep={formStep}
      setFormStep={setFormStep}
      closeModal={props.closeModal}
      form={{
        fields: (
          <SubmissionFormInnards
            values={values}
            setValue={setValue}
            formHelpers={formHelpers}
          />
        ),
        title: "Submit a New Festival",
        handleSubmit: () => supabaseMethods.insertSubmission(values),
        areAllFieldsValid: flags.areAllFieldsFilled,
      }}
    />
  );
};

const SubmissionFormInnards = ({
  values,
  setValue,
  formHelpers,
}: {
  values: SubmissionFormState;
  setValue: Dispatch<SetStateAction<SubmissionFormState>>;
  formHelpers: SubmissionFormStateType["formHelpers"];
}) => {
  return (
    <React.Fragment>
      <FormItemWrapper label={"Festival Name"}>
        <TextInput
          placeholder="e.g. Clearwater Kayak Festival"
          value={values.title}
          onChange={(e) =>
            setValue((value) => ({ ...value, title: e.target.value }))
          }
        />
      </FormItemWrapper>

      <FormItemWrapper label={"Link"}>
        <TextInput
          placeholder="e.g. https://www.facebook.com/ClearwaterKayakFestival"
          value={values.link}
          onChange={(e) =>
            setValue((value) => ({ ...value, link: e.target.value }))
          }
        />
      </FormItemWrapper>

      <Box direction={"row"}>
        <FormItemWrapper label={"Country"}>
          <Select
            options={convertEnumToObject(Countries).sort()}
            value={values.country}
            valueKey={{ key: "abb", reduce: true }}
            labelKey={"name"}
            onChange={({ option }: { option: GeoOption<Countries> }) => {
              setValue((value) => ({
                ...value,
                country: option.abb,
                state: formHelpers.getDefaultStateValue(option.abb),
              }));
            }}
          />
        </FormItemWrapper>

        <FormItemWrapper label={formHelpers.stateLabel}>
          <Select
            options={formHelpers.stateList}
            value={values.state}
            labelKey={"name"}
            valueKey={{ key: "abb", reduce: true }}
            onChange={(arg: { option: GeoOption<Provinces | States> }) => {
              setValue((value) => ({ ...value, state: arg.option.abb }));
            }}
          />
        </FormItemWrapper>

        <FormItemWrapper label={"City"}>
          <TextInput
            placeholder="e.g. Clearwater"
            value={values.city}
            onChange={(e) =>
              setValue((value) => ({ ...value, city: e.target.value }))
            }
          />
        </FormItemWrapper>
      </Box>
    </React.Fragment>
  );
};
