import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TrainerWorkspace.css';

function TrainerWorkspace() {
  const navigate = useNavigate();

  return (
    <div className='TrainerWorkspace-container'>
      <div className="wrap-breadcrumb">
        <div className="admin-breadcrumb">
          <Link to="/trainer-home" className="breadcrumb-link">Home</Link>
          <span> </span>
          <span>&gt;</span>
          <span className="breadcrumb-current"> Workspace</span>
        </div>
        <h1 className="admin-title">Workspace : Trainer</h1>
        <p className="admin-subtitle">สำหรับผู้ฝึกสอน</p>
      </div>

      <div className="admin-sections">
        <div className="admin-card" onClick={() => navigate('/trainer-schedule')}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA9lBMVEX////1jm/f399KVV//1FJHUl1CTlk+S1aUmp/6xbb1iWlGUVxjbHM9SVX1jGxudn2lqa5XYWr19vfBxcfm5+g1Qk/97Of2oIfS1Nf2mX36zsL3pIz5vaz6ybz849z1lniAhoyzt7r3taL/2VHw8fL0hWL/0kWIjpSvs7d5gIc/Tl/95uD++PZRXGaOk5jQ0tX71cv/3HQkNkT4uaf4r5pRWl7/8cz0gFt8d1yrmFn/1lv/7r9ncXn729L+8u8cLz+fj1q6oljJrVbWt1XixnGKgVvoxFTStFb/4I3+5qP+67L/+un/3n83SmBgZF7/9t1tbV3W0sRgzH2pAAAQNklEQVR4nO2dC3ubOBaGCRpJjgUGY2icpG1wi2OTBpNtMrszHac7l53OzO52L///z+wRsjGYm3DsWO3yPU+bxJaQXklIOkcCaVqnTp32JRcPrfjYmTioXII9TqgfOyMHk+tRL9C0+H3oHjsrB5IzsXvwwyfE/FoREwWImvaxM3FYObZ17CwcXA786/nHzsWB1TO/8qYaIIzf77u7CSa+MTR8e8frjnuhMbQWI2en2M5othwaoZ0Oha433Pfg38OUYYwZJbOgfWzdMglEZ8QcTnZIfB6ZJEmcpkNhvFtRVSoYUoQwIYQhRNi4dQ5NhgCPEIywGbaN7VgmThOno7bRpRQwhhizenYvRARhryWi7UHWIt+2FwbFiLbs7B0DkiTLnm2HEUHIWyM68S6tqUJLhog1cl1dd2OfIhy1uvQYAGlP57H1yZDB760SDwkixiiJPl5AU6KioQZDz9tbfc5NRHx9JbdHEVm0iT7EyJy4q+hj/lebuXPsIbZME4essKX4YsnaZaNGToSxoadyfbYuRymNTERtN40eQ3vwW6RuYIQyifcIWt0kPWj4bTBqFEMVTjaJ6DHcS3P56CHLlo/Io3xsl0D5ZKLrESKilQf7uwttiqNsGq6FmS8d2xlikqlCKCATmfJdFbQANM4mviDY2AGiVjPCwmwWoRZaJBJAJYyyBaRDZyHfRdgk1wJ0fQ7lveexUPMZ87OEOqQ6lI4dQBvPEw4xlR/2oTStXOwJRaIr1xe9ffU0ihLGHmlxP9dKWUL2lRPqVrgvU1hRwj2qI6xXR9iggxIGrlBYJESRK6sxLRLCJEdSwaKMUF99+ZSR3534RgQ2NRdGRUJEZQVhC4SISUcH07lACHawuPLQsnd08Y8tQhnM6dcqIWyjImEblRCmX0FJ7eIWcS2PARU1TQXqEFfXIeQvcYugtobwnLcMykI7Fpd0DVwkJLkPauTGJT1N3tiojQ62V4EQxyL6eDKLuAfI9FvdkDMwVyiaZ7qrZQkhlb5e4D2pL52VELKN/e3ElocRGbboXUMoIpp3J5cRmtIXdMsI5Q1ov54QFEcEMSTtdFhA/Girf1KcUHN8+Ggo2VAnJoQVNX579+by7Py1Vk348fysQQ91hK+aop/f1RDeXp5dPrx6IbIN9ULk3LBgj2OUAN6+GfT7g8H0sY5wOmjQeR3hab8h9vSijvAKQvT7l++SjIeQI6kelQdMXCiP/f4JVwPhSb2aCBui9+sJRRLTl0nOhxgjiXbKM5P4se7WiU9rW6kChJBFfitoMDeUWW5bwDjHC+J1mvU+r0OrZF5Kn0Y4kSaclcxLc4Qn/aQWYdxstgYctKrCk0Ea+y4Bx1bO1wYlgeDzF02EJ1e3QEgRneTySISv7b6R8FRLbIu8rw0MG+5ru03zKBra2ERm43obd2S6+cJNErFp1uu8muTwqm7K4snJR+EvXWQLaERFXi4HDZH791riLyVxNnHuYM4X7+CM5x6SaVwPsVdu0KtN0oNL+FuHdpadZo2I8Hm/aiRMGvkMbK1xLovC591YPEniLl8lySQew53Eb7iLTOLTd6KyG5upz8gMfrzLZRzaGV86iDLlCH/SQKYSRC3wienmPnbhPkqSaW7jJ32euMWgUW+iw58eb2gPmcSTOxEqu9H1thTTtVzVJDfiiM8D4nUqFl9JgE8/NgKeDK7WeVxXgzsBs2X7XqgkvBAtCKMU0SeifG6z5ZM0U9cU6DVyDNHH5XoA0cZnMFnF9hhM6/E8YogljVkiiydTXkABXxZdjiC2HsOVkDmXaqS8gHjAngl2YC/m0Sd8sTTx6ecTH2jJDL9p1Q66hKSPe5OLnFSituRGGVqGVsStxWTa81EiiyAtaadgxtGhZRkMemFzIVs+ooA0H6wd6CIsa8gTZxzjNt9++jz7XuOCTzmhuBM1H2wUKEr+n2kk87oHmSyKO1HTEbdkk+jMSwbmF81NfJN4j1vkEJuXU5S0xId9Eop2qsUGWNSMpJspXjV3FIlENWg9ZBKITkmYtKTbcznCpDuFwW5JzSTxyC5N/Il12H8Q3+vzmT+zVxe5kASETD6Kq8e9mb+YrPqCM6kGkEncncxms95YTD0vtmM/kfCkf3m7HVbqLlpHv9iO/VEasDzxQuk+lRAmcY+5kC9a5PCEz40/5qJfDCRvwlXid/nEL4uJP5kQMnn2uC7K29cP0zY55Jns379I6+/iSrqBp4nfpfX47k1Z4nsgBDvs5OHlxd3F6cNVW74kC/3zN6/u7i5eXg767aMP+ieXkPjd6cN5eeL7IEzS4WrVwrKxV9F3i92Q+J4IFVZH2BGqr46wI1RfbQmn/S9N03aEj6dfntoRfqHqCLUvnlCTImRh78sVaSQMIoz4Ux9fqlDjwkXAN6h8wUKNi6TQSvHQ+HKFu56GE8qthaspudGiI1RZHaHWESqvjlDrCJVXR6h1hMqrI9Q6QuXVEWodofJ6JsJ3p6+2VdhNk6gY7vRjWbjHQsDTx7Jwz0Z4UVzVOS8Ld1sM95fXZQGLy0TTh4rsPxNhcbdROWFxBW9aTljYfTHoCKvVEcqoI1yrI0zVEWay3xF2hHLqCNfqCFN1hJnsd4QdoZz+DwiLj+hXWMDFp+/LCQsP7fePS3h3db6ty7Jwt8VwV+/KAr4sBLy6r8h+54nqCJVXR6h1hMqrI9Q6QuXVEWodofLqCLWOUHl1hFo94YuiCq+r4LotCfikC34shitd738y4VXxocZXZeGesI5f4cV4rnX8q4JDqF9OuHdPVPGCXxth0df25msnPJCvTRFC/sbRq9KEvw5C/gqYx9Ie96sgHEyv7ks9qmn2/+q9r3jCcj6f66oTDqbn+XcpaU6w/dZ513Ur3tFKqTj7Sl3CQf9ss13Pieczg3grRVZvUgWWCq/AlCXsn6d8ur2kyZvYN++dJ9SL/EntGxOHw0hlwkHyDlUu1zYEHL65ufn8+bNpivfOA6bJQokptZqE07PVPHQc8pfsI3Zzg7778aeff/n0N1ePR/OFQfgBCoiZyG5qrWoSrlaa9DA5zeDm219//vSW65tv/rQOo88tzN/LSM0GRiUJRQUGMxP4btivv33D2YT+lAnmTpa8BGhUChCG4jxvJQkTjRABPvz9pw3eFqG2qmVsWiVnCDCm8GjB8xWamPN9k8UrEkJF8oCshIEQpQn1iEDn+eunPN/19XWBUNNiflyqWTiNrddbjNUlHMFwcPPtb2/zcL//8fcf/lwS2rFNftBpRYdTR3hSNLXLCf9SCHdVSlgIV7FXf24i9Pm7TQO9vv7wx78rMploTFjlgR51hCXuElk/TblbRdJPw0+hvfl+w/fhj3/U4XEFS7p9oIfjOI2ER9KcA/78NuX7QSoWP9ADZWtxOESNPc1xxE/ovElvweu/y8abmfkzS2Rm3kfROAt4/c+t9jlZGX1lmlFEMicHylhPx1CA8KaJFirQGZpe9Wk1PkHm5hyB0UjYHqoRWgR9/mndRIv9p1F3ppJjMFQ88VkxQhgnbn5dA5b0oLWE/MQ+cRpJVmoRujCT+deK70PZQFJPKE5kWF9r5d9QizBk6OYXUYUfSsfABkJ+QtL63V+m+V69ngYGipsfBeB1+RymiTA5TVz8un4LmFKEEUbfrnrRimG+iZAXkilCyNgWzy3I3WcxUFz/XhGkkVBbMoySX1xXV+4+NDD+19vqXkYEaSIce1vvqFOIMKZpFVZORZsJeTnlTkhXiNAn65GixMxdSYIQ2jrlpu9kotqcJsBrk+m6zMwVkiDkZ0Bxg1+9eenERPhTQxVKEfIzoBw52+L05bbuSx/8f31fCHhaFu42fQPw6mr39282prLP8H8a7kI5Qp0mK24y9uHedyqUeDHSTRsOQTdiyn1dk3sZwq2jyp7VE1U8xWOaEoJd+Fk00qqxUJpwQfBSHcJ0/XNOEW7qZyQJRxTRjYWhDGHI8HeCsHJJW5bQpfwgr8Vi9vz+0jrC1L1W05NKEmr8WLrj+LzrCM2V86JyStqCcImJfZx1ixpCd93R1DnXghlGeNg8fM8Im2m+HyrVSnlX+qGho3H5y60R9vwmQpvgjdPt2IRrr34MrbTO9E2yyhAxTbw6aLBGE4o2J1uqsjID82Vh/F5XevBhWkcWejzE4jDEGsFwEalHSNfmfSUh3F287em08VBHuBjSoogptX6YElbXYciSyZgTNb5oni8MKLefhmeqgXAmJmOxVB1Gyu2JkuhpRvws9dEc4cYDcpOeRsYC3jehVkPYPFoES76xhsItVvTcb+loo4VWPCJuujY4+Yj/S92IryMGfAxj0nzYuM+S46fVInQaZm0x40v1cysa+g37STU+t4NZWxAEjd7Eq+ILAios4MILAipaafGCqdMA18685xQGep/ntxEvuRbMXmW8+g+X2zq7Kwt3d1YIWL4t+/z8/EwoDZjuVKi1nhYeEkdKS0lYT8p59e1qC9gJTdQml8ICVm5lJq70YrgGgV6m+e5LJbwYuq6YV9+hqbs0/8WY8b0yDceL5yTviXpehRXexLmHzLDNhXQzN61ThxAmIuUeYft9rzxGhWC858ZHHI+S7TXqELosbaZbE7eW+YNGOtP4GnA6L1XlrCBopo0rMxKKVysz6Wgh59t5DmVW1+pcpk1aMjEzJ1h49TWLkXbN/HAablZId7/I2EOiypz19Acs51Y91QE1aV7lbpYFY8vWZSli5Rszn19g+q13KuzaTvlOhS1HlUuQKjdisttkva+0dsdspZJj5ETzDOb+ylK2GI5q4jyrlmw9Jl7/sdMFejTdp6C/J6sH92KvxbT9wILpiBgxdgSEbmazATNi3qoPhXuzyXn1bAILg++KqlsGrpEDZjJJO5WeMVn9zrfL4RZT94MK2unnn97u2M9Yud2XGWMZbnBMFJnYuHwD5X93izsDu3BW/pUNlzXDNgbK4QSTLowb/KHl6pmILPMfjY11DzNPnqzxR4GUG+SwmvMWtQMiALIoP7LbHkudx3FE+dN8ZLi0jiljnOQLajHf9UkAL6Bg2FYzdD3kpVNSp+fxRxkxZseUF69qI2vwuL1hYWtzQSFYl6xQEHMvO5lx5gYyKT3q6b6CMOkXvPRRLddrNGH5g2AsKqlp/pGTKZ5gPJnbR9WqmU34o1rGOsdLYdJWi3tTq105YcUDUcdVTBgCs06Uvk1r10THy2QoqArhm4zu1DcfWPxRLUSFDavTmkmXy5+lZdUL386SMqvqy+PKJjDXMqOJk6xDFB6gFHIXJj+a26irpJ4H7deZKViPyfOv2EQ91waKkgDBKKTwDcENOxf4DTrxaNOq4zEUD/nT3IQMy05QH4WIP5JPvJ5MR0JY0luRKHL5dY2qJ06fXfFy9baIYjOd8TkKRVJ8mmNHfBXDZdjT+UScNW3neEbpPSN5FwbZ/mLkUbqcSA8Ezsjh9iN9rydRkTqEmh4mb8Xwtj93rXlrWyEYze2Av0rEnitDODLE+y8iVWz0/SqwKe9OKQu/Tr7EhcSHRFsNy/UgMqi3HClzxxxCE1/BmUinTvvS/wBhfF126IFg9QAAAABJRU5ErkJggg==" alt="Schedule" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Schedule</h2>
            <p>ดูตารางการฝึกสอน</p>
          </div>
        </div>

        <div className="admin-card" onClick={() => navigate('/trainer-availability')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0qyzh2NAlj84aeVcc2p6u_xGn4oiz4QQPw&s" alt="Availability" className="admin-card-image" />
          <div className="admin-card-text">
            <h2>Availability Update</h2>
            <p>อัปเดตเวลาว่าง</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerWorkspace;
