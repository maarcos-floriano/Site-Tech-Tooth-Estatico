import React from "react";
import PropTypes from "prop-types";
import styled from "./FeatureCard.module.css";
import { Container } from "@mui/material";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <Container maxWidth='sm'>
      <div className={styled["feature-card"]}>
        {React.cloneElement(icon, { className: styled["feature-card__icon"] })}
        <h3 className={styled["feature-card__title"]}>{title}</h3>
        <p className={styled["feature-card__description"]}>{description}</p>
      </div>
    </Container>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default FeatureCard;
