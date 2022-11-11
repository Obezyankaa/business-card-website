/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import './MakingOrder.scss';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function MakingForm() {
  const [value, setValue] = React.useState<number | string | Array<number | string>>(
    30,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <div className="MakingForm-block">
      <form>
        <div>
          <select defaultValue="DEFAULT" name="select" className="MakingForm-block-choose">
            <option className="MakingForm-block-option" value="DEFAULT" disabled>Выберите тип системы</option>
            <option value="value2">Значение 2</option>
            <option value="value3">Значение 3</option>
            <option value="value4">Значение 4</option>
            <option value="value5">Значение 5</option>
            <option value="value6">Значение 6</option>
          </select>
          <input className="MakingForm-block-email" type="email" name="email" placeholder="Ваш e-mail" />
          <input className="MakingForm-block-name" type="text" name="name" placeholder="Ваше имя" />
        </div>
        <div className="MakingForm-block-two">
          <div className="MakingForm-block-range-block">
            <Box className="block-select">
              <Typography className="MakingForm-block-range-text" id="input-slider" gutterBottom>
                Sed ut perspiciatis, unde omnis iste natus
                <Grid item>
                  <Input
                    style={{ color: 'white' }}
                    value={value}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
          <input className="MakingForm-block-file" type="file" name="file" id="" />
        </div>
        <button className="btn-MakingForm" type="submit">Отправить</button>
      </form>
    </div>
  );
}
