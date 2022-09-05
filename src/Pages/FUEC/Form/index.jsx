import React from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import LayoutAuth from '../../Layout/Auth';
import { Formik } from 'formik';
import * as Yup from 'yup';

function FUECForm() {
  const initialValues = {
    origen: '',
    destino: '',
    descripcion: '',
    cliente: '',
    cedula: '',
    celular: '',
    direccion: '',
    pasajero: '',
  };

  const validationSchema = Yup.object().shape({
    origen: Yup.string().required('Es Requerido'),
    destino: Yup.string().required('Es Requerido'),
    descripcion: Yup.string().required('Es Requerido'),
    cliente: Yup.string().required('Es requerido'),
    cedula: Yup.string().required('Es requerido'),
    celular: Yup.string().required('Es requerido'),
    direccion: Yup.string().required('Es requerido'),
    pasajero: Yup.string().required('Es requerido'),
  });

  const onSubmit = (values, actions) => {
    console.log('Values', values);
  };
  return (
    <LayoutAuth>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-black font-bold text-xl text-center">Datos FUEC</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <div>
              <div>
                <Input
                  value={formik.values.origen}
                  classNameContainer="my-5 flex-1"
                  onChange={formik.handleChange('origen')}
                  placeholder="Origen"
                />
                <Input
                  value={formik.values.destino}
                  classNameContainer="my-5 flex-1"
                  onChange={formik.handleChange('destino')}
                  placeholder="Destino"
                />
              </div>
              <div>
                <Input
                  value={formik.values.descripcion}
                  classNameContainer="my-5"
                  onChange={formik.handleChange('descripcion')}
                  placeholder="Descripcion recorrido"
                />
                <Input
                  value={formik.values.cliente}
                  classNameContainer="my-5"
                  onChange={formik.handleChange('cliente')}
                  placeholder="Nombre cliente"
                />
                <Input
                  value={formik.values.celular}
                  classNameContainer="my-5"
                  onChange={formik.handleChange('celular')}
                  placeholder="celular"
                />
                <Input
                  value={formik.values.direccion}
                  classNameContainer="my-5"
                  onChange={formik.handleChange('direccion')}
                  placeholder="direccion"
                />
                <Input
                  value={formik.values.pasajero}
                  classNameContainer="my-5"
                  onChange={formik.handleChange('pasajero')}
                  placeholder="Pasajeros"
                />
              </div>
              <div>
                <Button
                  className="w-full py-2 bg-black text-white hover:bg-gray-800"
                  onClick={formik.handleSubmit}
                >
                  Solicitar
                </Button>
              </div>
              <div className="flex justify-between items-center space-x-2 mt-5">
                <Button className="w-full py-2 bg-[#d84537] text-white">
                  <div className="flex space-x-2 justify-center items-center">
                    <p className="md:text-base text-sm"> Cancel</p>
                  </div>
                </Button>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </LayoutAuth>
  );
}

export default FUECForm;
