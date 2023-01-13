import React from 'react';
import {Row, Col} from "react-bootstrap";

const ContactItem = ({item}) => {
  return (
    <div>
        <Row>
            <Col lg={1}>
                <img 
                    width={50}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAB7CAMAAABNXC7fAAAAMFBMVEXy8vK7v8LLz9K4vL/19fXv7/Ds7Oy+wsXFyMrO0dLBxMbJzM7i4+Ta3NzV19ne4eJ58Eb/AAADGklEQVRoge2Z247rIAxFoRhyg+T//3ZIOtOGhgS7NhzpKPutaqQljI3NRqlbt27dunXr1q1/IVjVCKWs8yHMIXhnVWUoKDf32vxJT8FVRIINXYTsZcwYKhFBzR+wX6QONYCw6BxtI3ZOnAjTGW0jDsJAN17hIrCXxV3CNuBoW+JWoByvQ/BiSIX28DpVdkCZpIGAw0WglwA6LE7rTiJnJjROm5m/QI9fXgS6lsuTSBlM6e3F3EGYKeGMC+T2ipG4vonHIxTDU7ySgIXKM57FG8g81gYCqRo2Hq8iqOnCTRg6j9Xo7X/Oax1P1ZN5rHxpXQ/U43qtdwaO2G03Hq/jUtsfe4ShJgyzwZP77cLst8SAsidCeJDmM/5ASOvw/IGX0nIl5l2l8KsTuZLhZxiB6XoDIiMqE80V2GOA5iHmGQCiDYpdbzcV7ImIYw7WnyrcqcUNGJivaJp7bGaA7jRrzCTvZ61acrtoTC9iE2QEyk868Qjjj8HXdHrBLtP4NFwjbhy8rQBLFwBgnV+8985+/iFDU2FG7BD4QcLpBTuvwSuXV79+NjOJLw+5ZFX9ml6RyIkqhLeHfN25X1OA6b6uDrC7Ci8YuLsD3QzfDRUfBrkZLr5Njp7vlnjosqfAJA7PT78wDY4NwfTZYxIyXjq5XdjsUamPFRYz+PjheoSTcK7L94J4NidEsOGkE5P8endukJtxdnZ7kItB8MPpmwsFeIHTW0/op8fwmEaTfU96A5E4lCmBmNiQby646Q8jVJbSLkQFYHkCxr82oIDFk4ZssBZUulKgnorwKkzddH+1CLzcQrLdggBelD0IR3PTeUTp7hVGFzlaAxd1wpNPlqfOUsZWWp42TZd3Nl5Inyx7NUvOp7ILrEbTOSOI/jJFUeYVi+7EU3iHzlszW/TRF62ZLasOvm/VcOrDMwjZh6cqDajs1JJTmqH0dxsyL8lQW6PRpkqG3wpzxEG7Sa3+9qUbWH/70q6L8W/Z2ldg/XRJEqZ6ta/aVXyL9NwnaNXe96d3grYoh7VFtGpGB161STDhvYam9rzuUV/dxvsBSnQmOopS0hYAAAAASUVORK5CYII=" 
                />
            </Col>
            <Col lg={11}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem