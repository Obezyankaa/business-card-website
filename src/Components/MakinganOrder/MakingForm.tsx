/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function MakingForm() {
  return (
    <div>
      <form>
        <div>
          <select name="select">
            <option selected>Выберите тип системы</option>
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
            <option value="value4">Значение 4</option>
            <option value="value5">Значение 5</option>
            <option value="value6">Значение 6</option>
          </select>
          <input type="email" name="email" placeholder="Ваш e-mail" />
          <input type="text" name="name" placeholder="Ваше имя" />
        </div>
        <div>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
          />
          <input type="file" name="file" id="" />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
