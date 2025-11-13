import React from 'react';
import { Link } from 'react-router-dom';
import './Service1.css';

const TreeTrimming = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1 className="service-hero-title">Tree Trimming and Removal Services</h1>
            <p className="service-hero-subtitle">
              Professional tree services including branch trimming, pruning, and complete tree removal. We trim branches to maintain tree health and safely chop down entire trees when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details">
        <div className="container">
          <div className="service-content">
            <div className="service-info">
              <h2>Professional Tree Trimming and Removal</h2>
              <p>
                Our professional team provides comprehensive tree services including branch trimming, pruning, and complete tree removal. We trim branches to maintain tree health, improve safety, and enhance your landscape appearance. When trees need to be removed entirely, we safely chop them down and handle all cleanup and disposal.
              </p>

              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Branch Trimming & Pruning</h4>
                    <p>Professional trimming of branches to maintain tree health, improve safety, and enhance appearance.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Complete Tree Removal</h4>
                    <p>Safe and efficient removal of entire trees when needed, including chopping down and full cleanup.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Deadwood & Hazard Removal</h4>
                    <p>Eliminating diseased, damaged, or dangerous branches and trees to protect your property.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">
                    <h4>Cleanup & Disposal</h4>
                    <p>Complete cleanup and responsible disposal of all tree debris and wood after trimming or removal.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-image">
              <div className="service-placeholder">
                <div className="service-icon">🌲</div>
                <p>Professional Tree Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3>Tree Assessment</h3>
                <p>We evaluate your trees to determine if branch trimming or complete removal is needed.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Service Plan</h3>
                <p>We create a plan for trimming branches or safely chopping down entire trees as needed.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Professional Service</h3>
                <p>Expert branch trimming or complete tree removal using proper techniques and equipment.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Cleanup & Disposal</h3>
                <p>Complete cleanup and responsible disposal of all branches and tree debris.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Tree Trimming or Removal?</h2>
            <p>Contact us for professional branch trimming or complete tree removal services that protect your property.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Get Free Quote</Link>
              <Link to="/services" className="btn btn-outline btn-large">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreeTrimming;


