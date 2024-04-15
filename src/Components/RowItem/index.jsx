import PropTypes from 'prop-types';

const RowItem = ({item}) => {
  return(
    <tr>
      <td>{item.nombre}</td>
      <td>{item.apellido}</td>
      <td>{item.correo}</td>
    </tr>
  );
}

RowItem.propTypes = {
  item: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    correo: PropTypes.string.isRequired,
  }).isRequired
};


export { RowItem };