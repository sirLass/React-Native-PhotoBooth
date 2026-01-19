import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <LinearGradient
        colors={['#0A1628', '#1E3A5F', '#2E5984']}
        style={styles.gradient}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Ionicons name="camera" size={32} color="#60A5FA" />
              <Text style={styles.logoText}>PhotoBooth</Text>
            </View>
            <TouchableOpacity style={styles.menuButton}>
              <Ionicons name="menu" size={28} color="#E5E7EB" />
            </TouchableOpacity>
          </View>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>
              Capture Your{'\n'}Perfect Moment
            </Text>
            <Text style={styles.heroSubtitle}>
              Professional photobooth experience right in your hands. 
              Create memories that last forever.
            </Text>
          </View>

          {/* Main Action Buttons */}
          <View style={styles.mainActions}>
            <TouchableOpacity style={styles.primaryButton}>
              <LinearGradient
                colors={['#3B82F6', '#2563EB']}
                style={styles.primaryButtonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Ionicons name="camera" size={24} color="#FFFFFF" />
                <Text style={styles.primaryButtonText}>Start Photo Session</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.secondaryButton}>
              <Ionicons name="images" size={22} color="#60A5FA" />
              <Text style={styles.secondaryButtonText}>View Gallery</Text>
            </TouchableOpacity>
          </View>

          {/* Feature Cards */}
          <View style={styles.featuresSection}>
            <Text style={styles.sectionTitle}>Features</Text>
            
            <View style={styles.featureGrid}>
              <TouchableOpacity style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <Ionicons name="color-filter" size={28} color="#3B82F6" />
                </View>
                <Text style={styles.featureTitle}>Filters</Text>
                <Text style={styles.featureDescription}>
                  50+ professional filters
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <Ionicons name="apps" size={28} color="#3B82F6" />
                </View>
                <Text style={styles.featureTitle}>Layouts</Text>
                <Text style={styles.featureDescription}>
                  Multiple photo layouts
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <Ionicons name="timer" size={28} color="#3B82F6" />
                </View>
                <Text style={styles.featureTitle}>Timer</Text>
                <Text style={styles.featureDescription}>
                  Auto-capture with timer
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.featureCard}>
                <View style={styles.featureIconContainer}>
                  <Ionicons name="share-social" size={28} color="#3B82F6" />
                </View>
                <Text style={styles.featureTitle}>Share</Text>
                <Text style={styles.featureDescription}>
                  Instant social sharing
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActionsSection}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            
            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionLeft}>
                <View style={styles.quickActionIcon}>
                  <Ionicons name="flash" size={22} color="#3B82F6" />
                </View>
                <View>
                  <Text style={styles.quickActionTitle}>Event Mode</Text>
                  <Text style={styles.quickActionSubtitle}>
                    Perfect for parties and events
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionLeft}>
                <View style={styles.quickActionIcon}>
                  <Ionicons name="settings" size={22} color="#3B82F6" />
                </View>
                <View>
                  <Text style={styles.quickActionTitle}>Settings</Text>
                  <Text style={styles.quickActionSubtitle}>
                    Customize your experience
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickActionItem}>
              <View style={styles.quickActionLeft}>
                <View style={styles.quickActionIcon}>
                  <Ionicons name="cloud-upload" size={22} color="#3B82F6" />
                </View>
                <View>
                  <Text style={styles.quickActionTitle}>Cloud Backup</Text>
                  <Text style={styles.quickActionSubtitle}>
                    Save your photos securely
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1628',
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F9FAFB',
    letterSpacing: -0.5,
  },
  menuButton: {
    padding: 8,
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: '800',
    color: '#F9FAFB',
    lineHeight: 56,
    marginBottom: 16,
    letterSpacing: -1,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#CBD5E1',
    lineHeight: 24,
    maxWidth: '90%',
  },
  mainActions: {
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 40,
  },
  primaryButton: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  primaryButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
    gap: 12,
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderWidth: 1.5,
    borderColor: 'rgba(59, 130, 246, 0.3)',
    gap: 12,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#60A5FA',
  },
  featuresSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  featureCard: {
    width: (width - 52) / 2,
    backgroundColor: 'rgba(30, 58, 95, 0.6)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
  },
  featureIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 6,
  },
  featureDescription: {
    fontSize: 13,
    color: '#94A3B8',
    lineHeight: 18,
  },
  quickActionsSection: {
    paddingHorizontal: 20,
  },
  quickActionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(30, 58, 95, 0.4)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.15)',
  },
  quickActionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(59, 130, 246, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F9FAFB',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 13,
    color: '#94A3B8',
  },
});