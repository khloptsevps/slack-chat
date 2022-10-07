import React from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../slices/modalSlice';
import useModal from '../../../utils/hooks/useModal.jsx';

const DropdownButtonItem = ({ id, children, variant }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { setType } = useModal();
  const params = { isOpened: true, extra: { currId: id } };
  const removeButtonHandler = () => {
    dispatch(openModal({ ...params, type: 'removeChannel' }));
    setType('removeChannel');
  };

  const renameButtonHandler = () => {
    dispatch(openModal({ ...params, type: 'renameChannel' }));
    setType('renameChannel');
  };
  return (
    <Dropdown as={ButtonGroup} className="d-flex">
      {children}
      <Dropdown.Toggle split variant={variant}>
        <span className="visually-hidden">{t('pages.chat.channels.buttons.control')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={removeButtonHandler}>
          {t('pages.chat.channels.buttons.remove')}
        </Dropdown.Item>
        <Dropdown.Item onClick={renameButtonHandler}>
          {t('pages.chat.channels.buttons.rename')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButtonItem;
