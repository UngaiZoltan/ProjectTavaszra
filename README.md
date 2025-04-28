.booking-header-pics {
    position: absolute;
    bottom: -50%;
    translate: 0 -90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.booking-header-pics > img {
    max-width: min(180px, 20%);
    border: 8px solid #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, .3)
}

@media screen and (min-width: 1280px) {
    .booking-header-pics {
        translate: 0 -80%
    }
    .booking-header-pics > img {
        min-width: min(200px, 20%)
    }
}

@media screen and (min-width: 1460px) {
    .booking-header-pics {
        translate: 0 -90%;
    }
    .booking-header-pics > img {
        min-width: min(250px, 20%)
    }
}

.booking-title {
    margin: 6vw 30px 30px 30px;
    font-size: 10px;
    text-align: center;
    line-height: 35px;
}
